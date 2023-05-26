import bcryptjs from 'bcryptjs';
export const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('password'),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@mail.com',
        password: bcryptjs.hashSync('password'),
    },
    {
        name: 'Jane Doe',
        email: 'jane@mail.com',
        password: bcryptjs.hashSync('password'),
    },
];
