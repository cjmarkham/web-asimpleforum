var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
    name: attr('string'),
    locked: attr('number'),
    sticky: attr('number'),
    views: attr('number'),
    replies: attr('number'),
    author: belongsTo('user'),
    forum: belongsTo('forum'),
    lastPost: belongsTo('post'),
    lastAuthor: belongsTo('user'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});