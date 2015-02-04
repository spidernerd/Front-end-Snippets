# A biblia do Front end
esse é o meu ponto de vista do que é util ter no workflow de um front end e backend. Caso você tenha alguma ideia ou queira imprementar sua opinião, sinta-se livre para editar esse arquivo.

## 1. Como Começar um projeto
Tenha um mapa mental das pasta, arquivos e depetencias do codigo, assin você já tem a base pronta para trabalhar se complicaçoes, se você vai usar Jquery, Bootstrap, ou qualquer outro framework, melhor que isso é gerar a estrutura inicia do seu projeto com [Yeoman](http://yeoman.io/), assim você vai ter tudo atualizado, estanciado e organizado via [Grunt](http://gruntjs.com/) e [Bower](http://bower.io/).

Caso queira saber como usar o Maravilhoso Yeoman!, nesse [video Feito pelo Juan Pujol](https://www.youtube.com/watch?v=vlOfaNP6AgM), todos os passo para instalar ele na sua maquina.

Apos criar a base do projeto, tenha em sua maquina o JSlint e CSSlint, para sempre verificar a qualidade do codigo, alem de verificar o HTML validate, para ter um codigo sem erros.

## 2. Editor de codigo
um bom editor de codigo é a base de um workflow, são quadro coisa que tranforma o editor eficaz:<br>
1. **Leve** - teve abrir rapidamente.<br>
2. **Limpo** - nada de tela cheia de coisa para tirar o foco no codigo.<br>
3. **Plugins** - ele teve ser expansivo e ser codigo aberto, dando a liberdade de criar plugins especifico para ele.<br>
4. **Custumizavel** - mudar cor, fonte e fundo é fundamental para deixar o editor mais amigavel e confortavel para o programador.<br>
<br>
**Sublime text:**
O editor mais popular ultimamente é o Sublime text, ele é extremamente leve e tem uma comunidade fervorosa, que atualiza sempre a biblioteca de plugins dele. atualmente ele esta na versão 3.0, com varias feactures que o tranforma em um editor unico.

**Atom:**
Ele é como o irmão mais novo do Sublime text, chega e lembrar muito visualmente, essa similaridade entre os editores não é ruim. Mas o que vai importar mesmo são as features extras que cada um pode trazer no futuro. Descrevi algumas features legais que me chamaram mais a atenção e que se diferenciam totalmente do Sublime.

caso queira saber mais sobre o Atom, segue o post do grande Diego Eis - [Atom: o novo editor by Github](http://tableless.com.br/atom-o-novo-editor-github/)

**Brackets:**
junto com o grupo, tem o recen chegado Brackets. ele é da adobe, mas diferente do dreamwave, ele vem com um visual simples e leve, com compatibilidade com PSD, para auxiliar na programação. um video descreve bem qual é o principal Feacture que ele tem.
[Brackets: From Design Comp to Code](https://www.youtube.com/watch?v=xAP8CSMEwZ8)<br>

## 3. Use 100% o teclado.
tenha o habito de programar continuamente, sem parar para ver no browser a preview. isso economiza muito tempo para o densevolvedor, depois de ter todo codigo pronto, use o tempo ganho para ajustar e corrigir qualquer bug que tenha aparecido no codigo.

uma vantagem que tem o sublime text é o **"enter distration free mode"**, que retira todas as distraçoes da tela.

## 4. Saiba usar o Developers tools do browser.
quando vc quer mudar a cor, margin, padding ou qualquer coisa no css, use o developer tools, isso evitar o que foi comentado ateriormente sobre atualizar o browser toda hora para ver a preview. 

Se você esta trabalhando com Javascript, use e apuse do 
```javascript
Console.log()
console.assert()
console.error()
```
com ele você pode saber tudo que esta passado no javascript. 
doc do [Console Javascript: MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/console)

## 5. Documente seu Projeto.
tenha o habito de criar documentação do seus projetos, mesmo que a unica pessoa que vai mexer no projeto seja você. isso ajuda a futuramente você ter um guia para se localizar. crie um README.MD no projeto ou uma wiki no BitBucket.

tem tambem o GitBook, que gera uma documentação perfeita usando Markdown, se você quer fazer um documentação. 

## 6. Use sempre Controle de versão.
tenha em mente que fazer um backup do codigo é algo funtamenta, principalmente em projeto grandes ou que envolve uma equipe. o git serve justamente para isso, pois ele guarda as alteraçoes e se tiver alguem trabalhando junto ele uni os arquivos que foram modificado nas duas maquinas.

resumindo, se você não conhece o Git, ou não usa ele como deveria. tem um video que apresenta o Git:
[Git e Github para iniciantes](https://www.youtube.com/watch?v=UMhskLXJuq4)

#### breve vou adicionar mais dicas com o tempo

