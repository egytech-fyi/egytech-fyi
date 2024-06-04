import { GetStatsResponse } from "@types";

function getBucketMinMax(string: string) {
    const regex: RegExp = /(\d+)-(\d+)K/;
    const match: RegExpExecArray | null = regex.exec(string);
    if (!match) return { min: -1, max: -1 };

    const min: number = parseInt(match[1]) * 1000;
    const max: number = parseInt(match[2]) * 1000;
    return { min, max };
}

export function transformBucketsData(
    data: GetStatsResponse,
    salary: number | undefined,
    type: "values" | "percentages" = "values"
): {
    transformedBuckets: [string, number][];
    salaryBucketIndex: number | undefined;
} {
    const { buckets, stats } = data;
    const salaryBucketIndex = buckets.findIndex((bucket, _index, buckets) => {
        const currentBucketMinMax = getBucketMinMax(bucket.bucket);
        const prevBucketMinMax = getBucketMinMax(buckets[_index - 1]?.bucket);
        const nextBucketMinMax = getBucketMinMax(buckets[_index + 1]?.bucket);

        if (!salary) return false;

        const isWithinABucket =
            salary >= currentBucketMinMax.min &&
            salary < currentBucketMinMax.max;
        const isBetweenTwoBucket =
            salary > prevBucketMinMax.max && salary < nextBucketMinMax.min;
        const isOutOfRange = _index === buckets.length - 1;

        if (isWithinABucket || isBetweenTwoBucket || isOutOfRange) {
            return true;
        }
        return false;
    });

    const transformedBuckets: [string, number][] = buckets.map((bucket) => {
        let value = 0;
        if (type === "percentages" && stats?.totalCount) {
            value = Number(
                Number((bucket.count / stats.totalCount) * 100).toPrecision(3)
            );
        } else {
            value = bucket.count;
        }
        return [bucket.bucket, value];
    });
    return { transformedBuckets, salaryBucketIndex };
}
