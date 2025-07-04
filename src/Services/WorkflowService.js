import Parse from 'parse';

export const getAllWorkflows = async () => {
    try {
        const Workflow = Parse.Object.extend('Workflow');
        const query = new Parse.Query(Workflow);
        const workflows = await query.find();
        
        console.log("Parse workflows found:", workflows.length);
        // Convert Parse objects to JSON object
        return workflows.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching from Parse:", error);
        return [];
    }
};