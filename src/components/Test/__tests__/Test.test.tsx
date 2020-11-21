import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Test from '../Test';

describe('Test', () => {
  const props = { loading: false, data: { text: 'text' } };
  it('should match snapshout with data', () => {
    const tree = renderer.create(<Test {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should display text', () => {
    const tree = mount(<Test {...props} />);
    expect(tree.text()).toContain('text');
  });

  it('should match snapshout without data', () => {
    props.loading = true;
    props.data = undefined;
    const tree = renderer.create(<Test {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should display loading', () => {
    const tree = mount(<Test {...props} />);
    expect(tree.text()).toContain('laoding');
  });
});
