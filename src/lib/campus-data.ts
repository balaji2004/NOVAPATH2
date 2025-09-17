export interface University {
    id: string;
    name: string;
    established: number;
    enrollment: number;
    contact: string;
    position: {
        x: string; // percentage
        y: string; // percentage
    };
}

export const universityData: University[] = [
    {
        id: 'stanford',
        name: 'Stanford University',
        established: 1885,
        enrollment: 17246,
        contact: 'admissions@stanford.edu',
        position: { x: '25%', y: '30%' },
    },
    {
        id: 'mit',
        name: 'Massachusetts Institute of Technology',
        established: 1861,
        enrollment: 11858,
        contact: 'admissions@mit.edu',
        position: { x: '80%', y: '20%' },
    },
    {
        id: 'ucb',
        name: 'University of California, Berkeley',
        established: 1868,
        enrollment: 45037,
        contact: 'admissions@berkeley.edu',
        position: { x: '15%', y: '65%' },
    },
    {
        id: 'harvard',
        name: 'Harvard University',
        established: 1636,
        enrollment: 21000,
        contact: 'admissions@harvard.edu',
        position: { x: '75%', y: '55%' },
    },
     {
        id: 'caltech',
        name: 'California Institute of Technology',
        established: 1891,
        enrollment: 2397,
        contact: 'admissions@caltech.edu',
        position: { x: '45%', y: '80%' },
    },
];
