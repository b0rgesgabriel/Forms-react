import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { InputLabel, NativeSelect, Stack } from '@mui/material';
import { DesktopDatePicker } from '@mui/lab';



const Container = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    #form {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export default function CadUsuario() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  return (
    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
                
      <TextField id="nome-usuario" label="Nome" variant="standard" /> 

      <TextField id="cpf-usuario" label="CPF" variant="standard" />

      <TextField id="email-usuario" label="E-mail" variant="standard" />

      <TextField id="data-nasc" label="Data de Nascimento" variant="standard" />
      
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
     Sexo
     </InputLabel>
     <NativeSelect
      inputProps={{
      name: 'sexo',
      id: 'uncontrolled-native',
    }}
  >
    <option id="masculino">Masculino</option>
    <option id="sexo-feminino">Feminino</option>
    <option id="sexo-indefinido">Não Binário</option>
  </NativeSelect>

      <TextField id="cad-telefone" label="Telefone" variant="standard" />

      <TextField id="cad-celular" label="Celular" variant="standard" />

      <TextField id="cad-cep" label="CEP" variant="standard" />

      <TextField id="cad-rua" label="Rua" variant="standard" />

      <TextField id="cad-numero" label="N°" variant="standard" />

      <TextField id="cad-bairro" label="Bairro" variant="standard" />
      
      <TextField id="cad-cidade" label="Cidade" variant="standard" />
      
      <TextField id="cad-estado" label="Estado" variant="standard" />

      <Button variant="outlined">Limpar Formulário</Button>
      <Button variant="outlined">Salvar Formulário</Button>
      
  
      </Box>
      
         
    </Container>
    
  );
  
}
