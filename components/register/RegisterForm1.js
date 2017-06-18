import { Field, reduxForm } from 'redux-form/immutable'

const RegisterForm1 = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
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
      >Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'RegisterForm1'
})(RegisterForm1)
