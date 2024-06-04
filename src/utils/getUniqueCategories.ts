type DataItemMember = [string, number];
type DataITem = {
    data: DataItemMember[];
};

export function getUniqueCategories(data: DataITem[]) {
    const uniqueCategories: string[] = data.reduce((acc: string[], curr) => {
        const categories = curr.data.reduce((acc: string[], curr) => {
            return (acc = [...acc, curr[0]]);
        }, []);
        return (acc = [...acc, ...categories]);
    }, []);
    const customSort = (a: string, b: string) => {
        const valA = parseInt(a.split("-")[0], 10);
        const valB = parseInt(b.split("-")[0], 10);
        return valA - valB;
    };
    return [...new Set(uniqueCategories.sort(customSort))];
}
