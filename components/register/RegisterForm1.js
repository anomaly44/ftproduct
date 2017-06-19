import { Field, reduxForm } from 'redux-form/immutable'
import { maxLength, minLength, required, email } from '../../utils/validation'
import { renderInput } from '../../utils/formHelpers'

const normalizeSubdomain = value => {
  if (!value) {
    return value
  }
  // filter out unallowed chars
  const filtered = value.replace(/[^a-zA-Z0-9-]/, '');
  return filtered.toLowerCase();
};

const RegisterForm1 = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Stap 1: Contact gegevens</h2>
      <Field
        name="firstName"
        component={renderInput}
        type="text"
        label="Voornaam"
        placeholder="Voornaam"
        validate={[required, maxLength(50)]}
      />
      <Field
        name="lastName"
        component={renderInput}
        type="text"
        label="Achternaam"
        placeholder="Achternaam"
        validate={[required, maxLength(50)]}
      />
      <Field
        name="name"
        component={renderInput}
        type="text"
        label="Bedrijfsnaam"
        placeholder="Bedrijfsnaam"
        validate={[required, maxLength(80)]}
      />
      <Field
        name="tel"
        component={renderInput}
        type="text"
        label="Telefoonnummer (binnen kantooruren)"
        placeholder="Telefoonnummer"
        validate={[required, maxLength(15)]}
      />
      <Field
        name="tel2"
        component={renderInput}
        type="text"
        label="Telefoonnummer (buiten kantooruren)"
        placeholder="Telefoonnummer 2"
        validate={[maxLength(15)]}
      />
      <legend>Adres</legend>
      <div className="row">
        <div className="col-md-8">
          <Field
            name="street"
            component={renderInput}
            type="text"
            placeholder="Straat"
            validate={[required, maxLength(200)]}
          />
        </div>
        <div className="col-md-2">
          <Field
            name="number"
            component={renderInput}
            type="text"
            placeholder="Nr."
            validate={[required, maxLength(200)]}
          />
        </div>
        <div className="col-md-2">
          <Field
            name="bus"
            component={renderInput}
            type="text"
            placeholder="Bus"
            validate={[maxLength(20)]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Field
            name="zip"
            component={renderInput}
            type="text"
            placeholder="Postcode"
            validate={[required, maxLength(10)]}
          />
        </div>
        <div className="col-md-9">
          <Field
            name="city"
            component={renderInput}
            type="text"
            placeholder="Plaats"
            validate={[required, maxLength(10)]}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary"
      >Volgende
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'RegisterForm1',
})(RegisterForm1)
