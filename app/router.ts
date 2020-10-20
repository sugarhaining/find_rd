import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;

    router.get('/', controller.home.index);

    // user login
    router.post('/login', controller.user.index);

    // comment publish
    router.post('/comment', controller.comment.publish)

    // get comments
    router.get('/comment', controller.comment.list)

    // get newest comment
    router.get('/comment/newest', controller.comment.listNewest)

    // reply comment
    router.put('/comment', controller.comment.reply)

    // get coment by id
    router.get('/comment/:id', controller.comment.listById)
};
