import { Field, reduxForm } from 'redux-form/immutable'
import { maxLength, minLength, required, email } from '../../utils/validation'

const normalizeSubdomain = value => {
  if (!value) {
    return value
  }
  // filter out unallowed chars
  const filtered = value.replace(/[^a-zA-Z0-9-]/, '');
  return filtered.toLowerCase();
};

const renderInput = ({ input, label, meta: { touched, error }, helpText, prefix, suffix, ...custom }) => {
  const showError = touched && error;
  const errorStringInput = showError ? 'form-control-danger' : '';
  const errorStringGroup = showError ? 'has-danger' : '';
  return (
    <div className={`form-group ${errorStringGroup}`}>
      <label className="form-control-label">{label}</label>
      <div className="input-group">
        {prefix && <span className="input-group-addon" id="http-addon">https://</span>}
        <input {...input} className={`form-control ${errorStringInput}`} {...custom}/>
        {suffix && <span className="input-group-addon" id="http-addon">.fixtrack.be</span>}
      </div>
      {showError && <div className="form-control-feedback">{error}</div>}
      {helpText && <small id="emailHelp" className="form-text text-muted">Minimum 6 karakters.</small>}
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
      <div className="row">
        <div className="col-md-8 col-lg-5">
          <Field
            name="subdomain"
            component={renderInput}
            type="text"
            label="Webadres van uw FixTrack platform"
            placeholder="uwkantoornaam"
            validate={[minLength(3), maxLength(50), required]}
            normalize={normalizeSubdomain}
            prefix="https://"
            suffix=".fixtrack.be"
          />
        </div>
      </div>
      <Field
        name="email"
        component={renderInput}
        type="text"
        label="E-mailadres"
        placeholder="E-mailadres"
        validate={[required, email]}
      />
      <Field
        name="password"
        component={renderInput}
        type="password"
        label="Wachtwoord"
        placeholder="Wachtwoord"
        validate={[required, minLength(6)]}
        helpText="Minimum 6 karakters."
      />
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
