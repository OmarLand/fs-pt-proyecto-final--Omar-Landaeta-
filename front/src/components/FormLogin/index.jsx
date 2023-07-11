import Styled from './styles.jsx';
import { useForm } from 'react-hook-form';
import { login } from '../../misc/templates.js';
import { useLogin } from '../../hooks';

const FormLogin = () => {

    const { register, formState, handleSubmit } = useForm();

    const doLogin = useLogin();

    // const handleForm = ( data ) => {
    //     console.info('Form data: ===>', data);
    //     mutate( data );
    // }

    console.info('Form State: ===> ', formState );
    
    const { errors, email, username, password } = login;

 
    return (
        <>
            <Styled.Form>
                
                <form onSubmit={ handleSubmit(doLogin) }>

                    <input className="input-text" required type="email" placeholder="e-mail" {...register("email", { required: true })} />
                    <br />
                    <p> { formState.errors && errors[ formState.errors?.email?.type ] } </p>

                    <input className="input-text" required type="password" placeholder="* * * * * * * *" {...register("password", { required: true, minLength: 4 } ) } />
                    <p> { formState.errors && errors[ formState.errors?.password?.type ] } </p>
                    <br />

                    <input className='submitButton' type="submit" value="Entrar"/>

                </form>

            </Styled.Form>

        
        </>
    );
}

export default FormLogin;