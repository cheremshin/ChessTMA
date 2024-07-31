export const getTask = () : any => {
    const tasks: any[] = [
        {
            id: 1,
            fen: "r2r2k1/pp3pp1/2bBpq1p/3n4/7P/P4PQ1/2B3P1/2RR2K1 b - - 0 28",
            solve: "d5e3 d6e5 d8d1 c1d1 f6e5 g3e5",
        },
    ];

    const randomIndex = Math.floor(Math.random() * tasks.length);

    return tasks[randomIndex];
}
