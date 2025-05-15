// import { ToadScheduler, SimpleIntervalJob, Task, AsyncTask, CronJob } from 'toad-scheduler';
import * as ToadScheduler from 'toad-scheduler';

const scheduler = new ToadScheduler.ToadScheduler();

// const task = new ToadScheduler.AsyncTask('simple task', async () => {
//     await console.log('Task triggered');
//   })
//   const job = new ToadScheduler.CronJob(
//     {
//       cronExpression: '*/2 * * * * *',
//     },
//     task,
//     {
//       preventOverrun: true,
//     }
//   )
//   scheduler.addCronJob(job)


///////////////////////////////////////////////////////////////////////////////////////////////////////


const task = new ToadScheduler.Task('simple task', () => {
	console.log('Task triggered');
});

const job1 = new ToadScheduler.SimpleIntervalJob(
	{ seconds: 5, runImmediately: false },
	task,
    { id: 'id_1' }
);

const job2 = new ToadScheduler.SimpleIntervalJob(
	{ seconds: 5, runImmediately: false },
	task,
    { id: 'id_2' }
);

//create and start jobs
// scheduler.addSimpleIntervalJob(job1);
// scheduler.addSimpleIntervalJob(job2);
job1.start();
job2.start();
// check status of jobs
// console.log(scheduler.getById('id_1').getStatus()); // returns Error (job not found)

// stop job with ID: id_2
// scheduler.stopById('id_2');

// remove job with ID: id_1
// scheduler.removeById('id_1');

// console.log(scheduler.getById('id_2').getStatus()); // returns "stopped" and can be started again