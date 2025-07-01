import Parse from 'parse';

export const getAllWorkflows = async () => {
    const Workflow = Parse.Object.extend('Workflow');
    const query = new Parse.Query(Workflow);
    const workflows = await query.find();
    return workflows;
};