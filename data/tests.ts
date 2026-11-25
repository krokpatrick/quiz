export type TestSummary = {
    id: string;
    name: string;
    description: string;
    numberOfTasks: number;
};

export const TESTS: TestSummary[] = [
    {
        id: 'history',
        name: 'Historia',
        description: 'Rzym, Grecja, i wszystko pomiędzy',
        numberOfTasks: 20,
    },
    {
        id: 'geography',
        name: 'Geografia',
        description: 'Stolice, rzeki, szczyty',
        numberOfTasks: 15,
    },
    {
        id: 'it',
        name: 'Informatyka',
        description: 'Sieci, systemy, języki',
        numberOfTasks: 12,
    }
]