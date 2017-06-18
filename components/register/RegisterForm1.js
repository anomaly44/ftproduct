import { Field, reduxForm } from 'redux-form/immutable'
import { maxLength, required, email } from '../../utils/validation'

const normalizeSubdomain = value => {
  if (!value) {
    return value
  }

  return value.toLowerCase();
};

const renderInput = ({ type, label, placeholder, meta: { touched, error }, ...custom }) => {
  const showError = touched && error;
  const errorStringInput = showError ? 'form-control-danger' : '';
  const errorStringGroup = showError ? 'has-danger' : '';
  return (
    <div className={`form-group ${errorStringGroup}`}>
      <label className="form-control-label">{label}</label>
      <input type={type} className={`form-control ${errorStringInput}`} />
      {showError && <div className="form-control-feedback">{error}</div>}
    </div>
  )
};

const RegisterForm1 = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <legend>Activiteit</legend>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="type" component="input" type="radio" value="0"/>
            &nbsp;Verhuurder / rentmeester
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="type" component="input" type="radio" value="1"/>
            &nbsp;Syndicus
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="type" component="input" type="radio" value="2"/>
            &nbsp;Beide (Zowel verantwoordelijk voor gemeenschappelijke als privatieve delen)
          </label>
        </div>
      </fieldset>
      <fieldset className="form-group">
        <legend>Versie</legend>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="version" component="input" type="radio" value="1"/>
            &nbsp;Express
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="version" component="input" type="radio" value="2"/>
            &nbsp;Plus
          </label>
        </div>
        <div className="form-check disabled">
          <label className="form-check-label">
            <Field name="version" component="input" type="radio" value="3" disabled/>
            &nbsp;Pro ( Coming soon )
          </label>
        </div>
      </fieldset>
      <div className="form-group">
        <label>Webadres van uw FixTrack platform</label>
        <div className="row">
          <div className="input-group col-md-6 col-lg-5">
            <span className="input-group-addon" id="http-addon">https://</span>
            <Field
              name="subdomain"
              component="input"
              type="text"
              placeholder="uwkantoornaam"
              className="form-control"
              validate={[maxLength(50), required]}
              normalize={normalizeSubdomain}
            />
            <span className="input-group-addon" id="http-addon">.fixtrack.be</span>
          </div>
        </div>
      </div>
      <Field
        name="email"
        component={renderInput}
        type="text"
        label="E-mailadres"
        placeholder="E-mailadres"
        className="form-control"
        validate={[required, email]}
      />
      <div className="form-group">
        <label>Wachtwoord</label>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Wachtwoord"
          className="form-control"
        />
        <small id="emailHelp" className="form-text text-muted">Minimum 6 karakters.</small>
      </div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary"
      >Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'RegisterForm1'
})(RegisterForm1)
