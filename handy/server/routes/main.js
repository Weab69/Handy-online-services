import { Router } from 'express';
const router = Router();

router.get('/', (rq, rs) => {
  rs.render('index');
});

router.get('/service', (rq, rs) => {
  rs.render('service');
});

router.get('/record', (rq, rs) => {
  rs.render('record');
});

export default router;