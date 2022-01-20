import { render, screen } from '@testing-library/react';
import reactDom from 'react-dom';
import SamuraiJSApp from './App';


// test('renders learn react link', () => {
//   render(<SamuraiJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders without crashing', () => {
  const div = document.createElement('div');
  reactDom.render(<SamuraiJSApp />, div);
  reactDom.unmountComponentAtNode(div);
});
