export default Ember.ArrayController.extend({

    amount: function () {
        return this.get('model.length');
    }.property('@each'),

    parentList: function () {
        var parentId = 0,
            forums = {},
            subforums = {},
            parents = {};

        var rootData = {
            forumId: 0
        };

        var branchRoot = rootData.forumId;

        var filter = this.filter(function (forum) {
            var forumId = forum.id;
            var forumParent = forum.get('parent');

            if (forumParent == rootData.forumId || forumParent == branchRoot) {
                var parentId = forumId;

                forums[forumId] = forum;

                if (forumParent == rootData.forumId) {
                    branchRoot = forumId;
                }
            }
        });

        for (var i in forums) {
            var value = forums[i];

            if (value.get('parent') == rootData.forumId) {
                parents['parent-' + value.id] = value;

                continue;
            }

            var forumId = value.id;
            var subforumList = [];

            if (subforums.hasOwnProperty(forumId)) {

                for (var k in subforums[forumId]) {
                    var subforumRow = subforums[forumId][k];

                    if (subforumRow.hasOwnProperty('name')) {
                        subforumList.push(subforumRow);
                    } else {
                        delete subforums[forumId][k];
                    }
                }

            }   

            var valueParentKey = 'parent-' + value.get('parent');

            if (!parents[valueParentKey].hasOwnProperty('forums')) {
                parents[valueParentKey].forums = {};
            }

            if (!parents[valueParentKey].forums.length) {
                parents[valueParentKey].forums = [];
            }

            parents[valueParentKey].forums.push(value);

            if (subforums.hasOwnProperty(value.id)) {
                parents[valueParentKey].forums[value.id].forums = subforums[value.id];
            }
        }

        var data = [];

        for (var p in parents) {
            data.push(parents[p]);
        }

        return data;
    }.property('@each')
});