import { t } from '../trpc';

export const helloRouter = t.router({
  healthz: t.procedure.query(() => 'Hey!'),
});
