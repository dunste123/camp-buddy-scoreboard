/*import PropTypes from 'prop-types';

export const BuddyObjectType = {
  emoteId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};*/

export type Buddy = {
    emoteId: string;
    name: string;
    score: number;
    extra_scores?: [{
        title: string;
        score: number;
    }];
};
