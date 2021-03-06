import * as React from 'react';
import { compose } from 'recompose';
import { translate, InjectedTranslateProps as i18nProps } from 'react-i18next';

export interface IProps {
  onChange: (imageData: string) => void;
  value?: string;
}

export interface IState {
  imageData: string;
}

class SelectLogo extends React.Component<IProps & i18nProps, IState> {
  state = { imageData: null };

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    if (value) {
      this.setState({ imageData: value });
    }
  }

  handleNewImage = e => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);

      reader.onload = () => {
        this.setState({ imageData: reader.result },() => {
          this.props.onChange(reader.result);
        });
      };
    }
  }

  render() {
    const { imageData } = this.state;
    const { t } = this.props;

    return (
      <div className='flex-column'>
        <div className='m-b-md image-fill-container w-100-xs' style={{minWidth: '200px', height: '136px' }}>
          { !imageData && <div className='w-100 h-100 bg-lightest-gray' />}
          { imageData && (
            <img src={imageData} />
          )}
        </div>

        <label
          htmlFor='hidden-logo-input'
          className="ui icon button secondary flex-grow uppercase">{t('org.selectLogo')}</label>

        <input
          id='hidden-logo-input'
          type="file" style={{display: 'none'}}
          onChange={this.handleNewImage}
        />
      </div>
    );

  }

}

export default compose(
  translate('translations')
)(SelectLogo);
