import Parse from 'parse';

export const getAllComponents = async (componentType) => {
    try {
        const Component = Parse.Object.extend(componentType);
        const query = new Parse.Query(Component);
        const components = await query.find();

        console.log("Parse components found:", components.length);
        // Convert Parse objects to JSON object
        return components.map(workflow => workflow.toJSON());
    } catch (error) {
        console.error("Error fetching from Parse:", error);
        return [];
    }
};