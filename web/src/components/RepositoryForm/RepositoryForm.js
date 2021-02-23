import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const RepositoryForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.repository?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="githubId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Github id
        </Label>
        <NumberField
          name="githubId"
          defaultValue={props.repository?.githubId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="githubId" className="rw-field-error" />

        <Label
          name="fullName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full name
        </Label>
        <TextField
          name="fullName"
          defaultValue={props.repository?.fullName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fullName" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RepositoryForm
