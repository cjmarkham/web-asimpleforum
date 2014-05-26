var attr = DS.attr;

export default DS.Model.extend({
    username: attr('string'),
    password: attr('string'),
    ip: attr('string'),
    email: attr('string'),
    topics: attr('number'),
    posts: attr('number'),
    approved: attr('number'),
    locale: attr('string'),
    active: attr('boolean'),
    profile: attr('number'),
    settings: attr('number')
});