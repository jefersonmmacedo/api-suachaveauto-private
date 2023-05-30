import { Router } from "express";
import nodemailer from 'nodemailer';


const mailRoutes = Router();

 mailRoutes.post("/create", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Seja bem-vindo" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Sua conta foi criada ✔", // Subject line
    text: "Sua conta foi criada ✔", // plain text body
    html: `<p style="text-decoration: none;">Parabens ${name}! <br/>
    Seja muito bem-vindo a Sua Chave.
    Somos uma start-up criada para imobiliárias e corretores, com foco em conectar seus imóveis a novos clientes. <br /><br />
    
    Acesse sua área administrativa clicando no link abaixo:<br/>
    <a href="https://adm.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});
 mailRoutes.post("/updateAccount", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Atualização realizada com sucesso!" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Sua conta foi atualizada ✔", // Subject line
    text: "Sua conta foi atualizada ✔", // plain text body
    html: `<p style="text-decoration: none;">Olá, ${name}. <br/>
    Sua conta foi atualizada com sucesso!<br/>
   
    Acesse sua área administrativa clicando no link abaixo:<br/>
    <a href="https://adm.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

mailRoutes.post("/createClient", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Seja bem-vindo" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Sua conta foi criada ✔", // Subject line
    text: "Sua conta foi criada ✔", // plain text body
    html: `<p style="text-decoration: none;">Parabens ${name}! <br/>
    Seja muito bem-vindo a Sua Chave.
    Encontreos os melhores imóveis com o perfil que você deseja. <br /><br />
    
    Acesse sua área de cliente acessando o link abaixo:<br/>
    <a href="https://suachave.com.br/entrar" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

mailRoutes.post("/newContract", async (req, res) =>  {
  const {email, name, company, status, website, title, idProperty} = req.body;
  
  const port = 587


 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Abertura de processo" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: `Processo de ${status} iniciado`, // Subject line
    text: `Processo de ${status} iniciado`, // plain text body
    html: `<p>Olá ${name}, <br/>
    A imobiliária ${company}, iniciou o processo de ${status} do imóvel: ${title}.<br/>
    Clique no link abaixo para enviar os documentos necessários para dar seguimento ao processo.:<br/>
    <a href="https://adm.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Enviar documentos</a> <br/><br/>
    Cllique no link abaixo e veja o imóvel desejado:<br/>
    <a href="${website}/${idProperty}" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Ver imóvel</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/documents", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Novo documento" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Você recebeu novos documentos", // Subject line
    text: "Você recebeu novos documentos", // plain text body
    html: `<p>Olá, temos novidades<br/>
    O Cliente: ${name}
    Enviou os documentos solicitados.<br/><br/>
    Veja em sua área administrativa. Clique a baixo:<br/>
    <a href="https://adm.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/voucher", async (req, res) =>  {
  const {email} = req.body;
  
 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Comprovante recebido" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Estamos analisando 🕗", // Subject line
    text: "Estamos analisando 🕗", // plain text body
    html: `<p>Recebemos o seu pedido de pagamento e seu comprovante<br/>
    Em até 48h você receberá um e-mail de confirmação, informando estar tudo ok com o comprovante enviado.<br/><br/>
    Não se preocupe, seu acesso ja está liberado. <br/>
    <a href="https://adm.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/paymentaproved", async (req, res) =>  {
  const {email} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tudo ok por aqui" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Pagamento confirmado 👏", // Subject line
    text: "Pagamento confirmado 👏", // plain text body
    html: `<p>Tudo certo, identificamos seu pagamento<br/>
    Continue a usar nossa plataforma aproveitando nossos serviços.<br/>
    <a href="https://adm.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/newmessage", async (req, res) =>  {
  const {email, link} = req.body;
  
  const port = 587


 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
        tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Opa. Um cliente entrou em contato" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Você tem uma nova mensagem 📨", // Subject line
    text: "Você tem uma nova mensagem 📨", // plain text body
    html: `<p>Você recebeu uma nova mensagem.
    <br/><br/>
    <a href="${link}" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Clique aqui para abrir a mensagem</a>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/alert", async (req, res) =>  {
  const {email, idProperty} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Novidades" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Alerta correspondente 😉", // Subject line
    text: "Alerta correspondente 😉", // plain text body
    html: `<p>Um novo imóvel foi adicionado e corresponde com seu alerta.<br/>
    Clique no link abaixo e veja:.
    <br/><br/>
    <a href="https://www.suachave.com.br/imovel/${idProperty}" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Ver imóvel</a>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/paymentreproved", async (req, res) =>  {
  const {email} = req.body;

 let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachave.com.br",
      pass: "211902fluminense@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Ops. Temos um problema" <contato@suachave.com.br>', // sender address
    to: email, // list of receivers
    subject: "Temos um problema 😢", // Subject line
    text: "Ops. Temos um problema 😢", // plain text body
    html: `<p>Não identificamos o seu pagamento.<br/>
    O comprovante enviado não é válido ou não bate com nossa base de pagamentos.
    <br/><br/>
    <b>Não envie tela de confirmação.<br/>
    Não envie comprovante resumido.<br/>
    Não envie linha de extrato.<br/>
    Não rasure ou corte o comprovante.<br/>
    O envio de comprovante fora dos padrões impossibilita análise do mesmo.</b> <br/><br/>
    Você pode enviar um novo comprovante respondendo este e-mail ou em nosso whatsapp.<br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachave.com.br <br/>
    --
    <br/>
    <a href="https://www.suachave.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachave.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/passwordcode", async (req, res) =>  {
  const mail = req.body;
  const code = req.body;
  console.log(mail.mail)
  console.log(code.code)


 let transporter = nodemailer.createTransport({
  host: "smtp.umbler.com",
  port: 587,
  secure: false,
  auth: {
    user: "contato@suachave.com.br",
    pass: "211902fluminense@"
  }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Seu código está aqui!" <contato@suachave.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Recupere seu acesso 🗝️", // Subject line
    text: "Recupere seu acesso 🗝️", // plain text body
    html: `<p>Você solicitou código de recuperação de senha?<br/>
    Aqui está. Utilize-o para redefinir seu acesso:<p/> 
    <p>Seu código:</p>
    <h3>${code.code}</h3>
    <p>Acesse o link para alterar sua senha: <a href="https://suachave.com.br/recuperar-codigo/${mail.mail}" target="_blank">Recuperar minha senha</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@suachave.com.br <br/><br/>
    
    suachave <a href="https://www.suachave.com.br" target="_blank">www.suachave.com.br</a></p>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email com código de recuperação enviado com sucesso")
}

});

mailRoutes.post("/newpassword", async (req, res) =>  {
  const mail = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
  host: "smtp.umbler.com",
  port: 587,
  secure: false,
  auth: {
    user: "contato@suachave.com.br",
    pass: "211902fluminense@"
  }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sucesso!" <contato@suachave.com.br>', // sender address
    to: mail.mail, // list of receivers
    subject: "Senha alterada 🔒", // Subject line
    text: "Senha alterada 🔒", // plain text body
    html: `<p>Sua senha foi alterada com sucesso.<br/>
    Faça login com seu e-mail e nova senha:<p/> 

    <p>Caso não tenha solicitado alteração de senha:</p><br/>
    <p>Entre em contato com nossa equipe!</p>
   
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@suachave.com.br <br/><br/>
    
    suachave <a href="https://www.suachave.com.br" target="_blank">www.suachave.com.br</a></p>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email com código de recuperação enviado com sucesso")
}

});

export { mailRoutes };


