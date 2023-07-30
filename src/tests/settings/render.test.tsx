import Settings from '@/app/settings/components/Settings/Settings';
import { MsgPlaceholder } from '@/assets/message';
import { handleClearElements } from '@/lib/handler/handleTestUserEvent';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('/settings Test', () => {
  const setup = async () => {
    const utils = render(<Settings />);
    const nameInput = utils.getByPlaceholderText(MsgPlaceholder.name);
    const emailInput = utils.getByPlaceholderText(MsgPlaceholder.email);
    const blogNameInput = utils.getByPlaceholderText(MsgPlaceholder.blogName);
    const descriptTextarea = utils.getByPlaceholderText(
      MsgPlaceholder.description,
    );
    const elementsArr = [
      nameInput,
      emailInput,
      blogNameInput,
      blogNameInput,
      descriptTextarea,
    ];
    handleClearElements(elementsArr);
    return {
      ...utils,
      nameInput,
      emailInput,
      blogNameInput,
      descriptTextarea,
    };
  };
  it('default render', async () => {
    // const data = {
    //   name: 'test',
    //   email: 'test123@test.com',
    //   thumbnail: 'https://example.com/image.jpg',
    // };
    const { nameInput, emailInput, blogNameInput, descriptTextarea } =
      await setup();
    await UserEvent.type(nameInput, 'name');
    await UserEvent.type(emailInput, 'email');
    await UserEvent.type(blogNameInput, 'blog');
    await UserEvent.type(descriptTextarea, 'description');
    expect(screen.getByDisplayValue('name')).toBeInTheDocument();
    expect(screen.getByDisplayValue('email')).toBeInTheDocument();
    expect(screen.getByDisplayValue('blog')).toBeInTheDocument();
    expect(screen.getByDisplayValue('description')).toBeInTheDocument();
  });
});
