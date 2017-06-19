export const renderInput = ({ input, label, meta: { touched, error }, helpText, prefix, suffix, ...custom }) => {
  const showError = touched && error;
  const errorStringInput = showError ? 'form-control-danger' : '';
  const errorStringGroup = showError ? 'has-danger' : '';
  return (
    <div className={`form-group ${errorStringGroup}`}>
      {label && <label className="form-control-label">{label}</label>}
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