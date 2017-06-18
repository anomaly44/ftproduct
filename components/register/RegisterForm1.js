import { Field, reduxForm } from 'redux-form/immutable'

const RegisterForm1 = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <legend>Activiteit</legend>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="type" component="input" type="radio" value="0" />
            &nbsp;Verhuurder / rentmeester
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="type" component="input" type="radio" value="1" />
            &nbsp;Syndicus
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="type" component="input" type="radio" value="2" />
            &nbsp;Beide (Zowel verantwoordelijk voor gemeenschappelijke als privatieve delen)
          </label>
        </div>
      </fieldset>
      <fieldset className="form-group">
        <legend>Versie</legend>
        <div className="form-check">
          <label className="form-check-label">
            <Field name="version" component="input" type="radio" value="1" />
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
            <Field name="version" component="input" type="radio" value="3" disabled />
            &nbsp;Pro ( Coming soon )
          </label>
        </div>
      </fieldset>
      <div className="form-group">
        <label>E-mailadres</label>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="E-mailadres"
          className="form-control"
        />
      </div>
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
