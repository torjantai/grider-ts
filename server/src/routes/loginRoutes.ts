import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const router = Router();
router.use((req, res, next) => {
    console.log(req.method);
    next();
})

router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label>
                    Email
                    <input name="email" />
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input name="password" type="password" />
                </label>
            </div>
            <input type="submit" />
        </form>
    `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    console.log('asdf', req.body)
    const { email, password } = req.body;
    if ( email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.send('invalid email or password');
    }
});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <h3>Logged in</h3>
                <a href="/logout">Logout</a>
            </div>
        `);
    } else {
        res.send(`
        <div>
            <h3>Not Logged in</h3>
            <a href="/login">Login</a>
        </div>
    `);
    }
});

export { router };