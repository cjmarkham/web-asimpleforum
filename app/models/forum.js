var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
    name: attr('string'),
    description: attr('string'),
    parent: attr('number'),
    left: attr('number'),
    right: attr('number'),
    posts: attr('number'),
    locked: attr('number'),
    lastTopic: belongsTo('topic'),
    lastPost: belongsTo('post'),
    topics: hasMany('topic', {
        async: true
    })
});