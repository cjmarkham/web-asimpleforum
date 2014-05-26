var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
    name: attr('string'),
    topic: belongsTo('topic'),
    forum: belongsTo('forum'),
    content: attr('string'),
    author: belongsTo('user'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});