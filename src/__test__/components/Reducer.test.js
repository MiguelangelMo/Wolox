import dataReducer from '../../reducers/ItemsReducer';
// eslint-disable-next-line no-use-before-define

describe('dataReducer', () => {
    it('return the initial state', () => {
        expect(dataReducer({}, {})).not.toBe({});
    });
    it('receives dataReducer', () => {
        expect(dataReducer({}, {
            type: 'TEST_LOCAL',
            data: 'MIguelangel Molero',
        })).toEqual({ data: "MIguelangel Molero" });
    });
});
