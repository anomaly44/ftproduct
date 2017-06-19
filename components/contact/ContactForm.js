import { Field, reduxForm } from 'redux-form/immutable'
import { maxLength, minLength, required, email } from '../../utils/validation'
import { renderInput, renderTextArea } from '../../utils/formHelpers'

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-5">
          <Field
            name="name"
            component={renderInput}
            type="text"
            placeholder="Naam"
            validate={[required, maxLength(100)]}
          />
        </div>
        <div className="col-md-5">
          <Field
            name="company"
            component={renderInput}
            type="text"
            placeholder="Bedrijf"
            validate={[required, maxLength(50)]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <Field
            name="email"
            component={renderInput}
            type="text"
            placeholder="E-mailadres"
            validate={[required, email]}
          />
          <Field
            name="content"
            component={renderTextArea}
            type="text"
            placeholder="Mijn bericht"
            validate={[required]}
            rows="3"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary"
      >{submitting && <i className="fa fa-spinner fa-spin fa-fw"/>} Verstuur bericht
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'ContactForm',
})(ContactForm)