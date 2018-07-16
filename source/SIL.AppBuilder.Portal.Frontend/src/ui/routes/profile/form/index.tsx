import * as React from 'react';
import { withTemplateHelpers, Mut, ToggleHelper } from 'react-action-decorators';
import { Form, Divider, Checkbox, Button, Icon, Grid } from 'semantic-ui-react';

import TimezonePicker from 'react-timezone';

import { UserAttributes } from '@data/models/user';


export interface IProps {
  onSubmit: (data: UserAttributes) => Promise<void>;
}

export interface IState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  localization: string;
  timezone: string;
  emailNotification: boolean;
  sshKey: string;
}


@withTemplateHelpers
export default class EditProfileDisplay extends React.Component<IProps, IState> {

  mut: Mut;
  toggle: ToggleHelper;

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    localization: '',
    timezone: '',
    emailNotification: false,
    sshKey: ''
  };

  submit = async (e) => {
    e.preventDefault();
    await this.props.onSubmit({ ...this.state });
  }

  render() {
    const { mut, toggle } = this;
    const {
      firstName,lastName, email, phone, localization,
      timezone, emailNotification,
      sshKey
    } = this.state;

    return (
      <Form data-test-edit-profile>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>First name</label>
                <input
                  data-test-profile-firstname
                  value={firstName}
                  onChange={mut('firstName')} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Last name</label>
                <input
                  data-test-profile-lastname
                  value={lastName}
                  onChange={mut('lastName')} />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form.Field>
          <label>Email</label>
          <input
            data-test-profile-email
            value={email}
            onChange={mut('email')} />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            data-test-profile-phone
            value={phone}
            onChange={mut('phone')} />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input
            data-test-profile-localization
            value={localization}
            onChange={mut('localization')} />
        </Form.Field>
        <Form.Field>
          <label>Timezone</label>
          <div
            data-test-profile-timezone
            className='timezone-group'
          >
            <Icon name='caret down' />
            <TimezonePicker
              className='timezone'
              value={timezone}
              onChange={tz => {
                this.setState({timezone: tz});
              }}
              inputProps={{
                placeholder: 'Select your Timezone...',
                name: 'timezone'
              }}
            />
          </div>
        </Form.Field>
        <Divider horizontal/>
        <h2 className='form-title'>Notification Settings</h2>
        <Form.Field>
          <div className='notifications'>
            <span>I do not wish to recieve email notifications</span>
            <Checkbox
              data-test-profile-email-notification
              toggle
              defaultChecked={emailNotification}
              onChange={toggle('emailNotification')}
              />
          </div>
        </Form.Field>
        <Divider horizontal/>
        <h2 className='form-title'>Manage Personal SSH KEY</h2>
        <Form.Field>
          <label>SSH KEY</label>
          <input
            data-test-profile-ssh-key
            value={sshKey}
            onChange={mut('sshKey')} />
        </Form.Field>
        <Button
          data-test-profile-submit
          onClick={this.submit}
          className='form-button'
        >
          Update Profile
        </Button>
      </Form>
    );

  }

}