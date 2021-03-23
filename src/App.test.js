import ReactDOM from 'react-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Header', () => {
  render(<App />);
  const text = screen.getByText('Bogdan Samoletskyi resume');
  expect(text).toBeInTheDocument();
});

it('renders About section', () => {
  render(<App />);
  const text = screen.getByText('About');
  expect(text).toBeInTheDocument();
});

it('renders Experience section', () => {
  render(<App />);
  const text = screen.getByText('Experience');
  expect(text).toBeInTheDocument();
});

it('renders Qualifications section', () => {
  render(<App />);
  const text = screen.getByText('Qualifications');
  expect(text).toBeInTheDocument();
});

it('renders Certificates section', () => {
  render(<App />);
  const text = screen.getByText('Education & certificates');
  expect(text).toBeInTheDocument();
});

it('renders Projects section', () => {
  render(<App />);
  const text = screen.getByText('Personal projects');
  expect(text).toBeInTheDocument();
});

it('renders Contacts section', () => {
  render(<App />);
  const text = screen.getByText('Contacts');
  expect(text).toBeInTheDocument();
});

it('renders Blog section', () => {
  render(<App />);
  const text = screen.getByText('Blog');
  expect(text).toBeInTheDocument();
});