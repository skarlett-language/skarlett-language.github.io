import './App.css';
import logo from './Skarlett-Logo.png';
import React, {useState} from "react";
import macOsZip from './pkgs/skarlett_1.0.0-macos-universal.zip';
import linuxi386TarGz from './pkgs/skarlett_1.0.0-linux-i386.tar.gz';
import linuxAarch64TarGz from './pkgs/skarlett_1.0.0-linux-arm64.tar.gz';
import linux86_64 from './pkgs/skarlett_1.0.0-linux-x86_64.tar.gz';
import windowsWizard from './pkgs/Skarlett Installer.exe';


function HomePage() {

  const styles = {
    centerDiv : {
      margin : '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width : '95%',
      height : '100%',
      alignItems: 'center',
      alignContent : 'center',
      alignSelf : 'center'
    },

    leftDiv : {
      width : '40%',
      alignItems :'start',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center'
    },

    logo : {
      width : '100%',
      alignSelf : 'start',
      borderColor : '#14FFEC',
      stroke : '#14FFEC'
    },

    rightDiv : {
      width : '60%',
      color : '#F1F1F1',
      fontSize: '280%'
    }
  }
  return (
    <div>
      <div  id="homeCenterDiv" className={"homeCenterDiv"}>
        <div className={"leftDiv"}>
          <img alt={'Skarlett programming language logo'} src={logo} style={styles.logo} />
        </div>
        <div className={"rightDiv"}>
          <p>
            Skarlett <br /> <br />
            Logic computation centered, interpreted, procedural programming language
            <br /> <br />
            Includes three different numbering systems: binary, decimal and hexadecimal.
            It also includes the concept of infinity, with related mathematics and logic
            <br /> <br />
            Features an extremely simple syntax, inspired by Python and C++
          </p>
        </div>
      </div>
    </div>
  )
}

function Code(props) {
  const styles = {
    main : {
      backgroundColor : '#5F5F5F',
      color : '#14FFEC',
      borderRadius: '15px',
      textAlign : 'start',
      padding : '10px',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      boxShadow : '5px 5px 10px #1F1F1F',
    },
    text : {
      margin: '0',
      padding: '0',
      marginTop: '15px',
      marginBottom: '15px',
      marginLeft : '10px',
      marginRight : '10px',
      fontFamily : 'Courier New'
    }
  }

  return (
    <div style={styles.main}>
      <p style={styles.text}>
        <strong>
          {props.text}
        </strong>
      </p>
    </div>
  )
}

function Documentation() {
  const styles = {
    docs : {
      width : '80%',
      alignSelf: 'center',
      fontSize : '40px'
    },
    main : {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      color: '#F1F1F1',
      paddingBottom : '20px'
    },
    description : {
      alignSelf : 'start',
      textAlign: 'start'
    },
    codeMain : {
      backgroundColor : '#5F5F5F',
      color : '#14FFEC',
      borderRadius: '15px',
      textAlign : 'start',
      padding : '10px',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      boxShadow : '5px 5px 10px #1F1F1F',
    },
    codeText : {
      margin: '0',
      padding: '0',
      marginTop: '15px',
      marginBottom: '15px',
      marginLeft : '10px',
      marginRight : '10px',
      fontFamily : 'Courier New'
    }
  }
  return (
    <div style={styles.main}>
      <div style={styles.docs}>
        <p>
          Programming rules
        </p>
        <p style={styles.description}>
          Skarlett requires the pogrammer to observe some simple style rules: <br/>
          &emsp; - statements <br/>
          &emsp; &emsp; &emsp; - any kind of statement requires to be surrounded with curly brackets (more will be explained in the next parts od the docmentation) <br/> <br/>
          &emsp; - spaces <br/>
          &emsp; &emsp; &emsp; - spacing-correctness is an important practice <br/>
          &emsp; &emsp; &emsp; - always remember to put a space in between variable names, keywords, operators and function names <br/>
          &emsp; &emsp; &emsp; - only brackets (of any type) do not require spacing-correctness <br/> <br/>
          &emsp; - parentheses <br/>
          &emsp; &emsp; &emsp; - parentheses are not formally required in most of the cases, but it is better to wrap around operation when nested inside other operations with different nature (for example combining logic and arithmetic)

        </p>
        <p>
          Types
        </p>
        <p style={styles.description}>
          In Skarlett there are tree macro types: <br />
          &emsp; - numbers <br />
          &emsp; - strings <br />
          &emsp; - lists <br />
          <br /> <br />

          Numbers can be represented in tree different forms: <br />
          &emsp; - base 2 <br />
          &emsp; &emsp; &emsp; - binary numbers, in Skarlett you can declare them putting "bx" before the bits <br /> <br/>
          <Code text={"binaryNumber = bx01101"}/> <br/>

          &emsp; - base 10 <br />
          &emsp; &emsp; &emsp; - regular numbers, which can be integers or floating point <br/> <br/>
          <Code text={["integerNumber = 32", <br/>, "floatNumber = 1024.16"]}/> <br/>

          &emsp; - base 16 <br />
          &emsp; &emsp; &emsp; - hexadecimal numbers, you must put "hx" before declaring them <br /> <br/>
          <Code text={"hexadecimalNumber = hxF1"} /> <br/>

          &emsp; - negative numbers <br/>
          &emsp; &emsp; &emsp; - the representation of negative numbers is only allowed in base 10 <br/>
          &emsp; &emsp; &emsp; - any other attempt of negative representation will be converted in base 10 <br/> <br/>
          <Code text={"negativeNumber = -64"}/> <br/>

          &emsp; - infinity <br/>
          &emsp; &emsp; &emsp; - the language implements the concept of infinity, and its logic and mathematic applications and properties <br/>
          &emsp; &emsp; &emsp; - infinity can be both positive and negative <br/> <br/>
          <Code text={"infinityVariable = inf"} />

          <br/> <br/>


          Strings can be declared in only one way: single quoted strings <br /> <br/>
          <Code text={"stringVariable = 'Skarlett programming is great!'"} /> <br/> <br/>


          Lists in Skarlett are multi-type, and must be declared empty<br/> <br/>
          <Code text={"listVariable = []"} /> <br/>
        </p>
        <p>
          Operators
        </p>
        <p style={styles.description}>
          Skarlett provides several operators, both logic and arithmetic <br/>
          &emsp; &emsp; - logic operators <br/><br/>
          <Code text={[
            "== [equal]", <br/>,
            "!= [not equal]", <br/>,
            " > [greater]", <br/>,
            " < [less]", <br/>,
            ">= [greater equal]", <br/>,
            "<= [less equal]", <br/>,
            "not", <br/>,
            "and", <br/>,
            "nand", <br/>,
            "or", <br/>,
            "nor", <br/>,
            "xor", <br/>,
            "xnor"]}/> <br/>

          &emsp; &emsp; - arithmetic operators <br/> <br/>
          <Code text={[
            "+ [sum]", <br/>,
            "- [subtract]", <br/>,
            "* [multiply]",<br/>,
            "/ [divide]", <br/>,
            "** [power]", <br/>,
            "// [integer divide]", <br/>,
            "% [module]", <br/>,
            "<< [left shift]", <br/>,
            ">> [right shift]", <br/>
          ]}/> <br/>

          &emsp; &emsp; - all arithmetic operators can be used in assignation, only with variables that already exist <br/> <br/>
          <Code text={[
            "+=", <br/>,
            "-=", <br/>,
            "*=",<br/>,
            "/=", <br/>,
            "**=", <br/>,
            "//=", <br/>,
            "%=", <br/>,
            ">>=", <br/>,
            "<<=", <br/>
          ]}/>
        </p>
        <br/>
        <p>
          Comments
        </p>
        <p style={styles.description}>
          You can make both single line and multi line comments, the only thing to remember is to put "#" before and after the comment <br/> <br/>

          <Code
            text={[
              "# this is", <br/>,
              "a multi-line", <br/>,
              "comment #"
          ]}
          />

        </p>
        <p>
          Conditionals
        </p>
        <p style={styles.description}>
          Conditionals in Skarlett involve 3 keywords: if, elif, else. <br/><br/>

          When you create a conditional, you must provide a condition after the "if" keyword, after which you place your statement, surrounded by curly brackets.
        </p>
        <div style={styles.codeMain}>
          <p style={styles.codeText}>
            <strong>
            if 5 == 7 {"{"}<br/>
            &emsp;&emsp;# do something #<br/>
            {"}"} elif 5 > 7 {"{"}<br/>
            &emsp;&emsp;# do something else #<br/>
            {"}"} else {"{"}<br/>
            &emsp;&emsp;# do something else #<br/>
            {"}"}<br/>
            </strong>
          </p>
        </div>
        <p>
          Loops
        </p>
        <p style={styles.description}>
          &emsp; &emsp; - Skarlett only provides while loops <br/>
          &emsp; &emsp; - statements must be wrapper around with curly brackets <br/>
          &emsp; &emsp; - "exit" keyword interrupts the loop<br/>
          &emsp; &emsp; - "continue" keyword skips the execution to the next condition check <br/>
        </p>
        <div style={styles.codeMain}>
          <p style={styles.codeText}>
            <strong>
              i = 0<br/>
              while i {"<"} 10 {"{"} <br/>
              &emsp;if i == 6 {"{"}<br/>
              &emsp;&emsp;continue<br/>
              &emsp;{"}"}<br/>
              &emsp;show(i)<br/>
              &emsp;if i == 8 {"{"}<br/>
              &emsp;&emsp;exit<br/>
              &emsp;{"}"}<br/>
              &emsp;i -= 1 <br/>
              {"}"}<br/>
            </strong>
          </p>
        </div>
        <p>
          Function definition
        </p>
        <p style={styles.description}>
          The definition of functions require a keyword, which is "fnc", that must be placed before the name you want to give to the function. <br/><br/>
          Any function can require multiple parameters, and can give back only one value: <br/>
          &emsp; &emsp; - in case you want to give back multiple parameters, you can always use a list containing all the values<br/><br/>
          The statement of the function has to be wrapped around by curly brackets (C++ style)<br/>
        </p>
        <div style={styles.codeMain}>
          <p style={styles.codeText}>
            <strong>
              fnc makeGreetString(name){"{"}<br/>
              &emsp;&emsp;return 'Hi ' + name + '! Welcome to Skarlett!'<br/>

              {"}"}<br/>
            </strong>
          </p>
        </div>
        <p>
          Builtin Functions
        </p>
        <p style={styles.description}>
          &emsp; &emsp; - casting functions <br/>
          &emsp; &emsp; &emsp; &emsp; - casting functions get only one parameter, a variable or a value, and return the same value in a different type <br/><br/>
          <Code text={
            ["int()", <br/>,
            "float()", <br/>,
            "hexa()", <br/>,
            "bin()", <br/>,
            "bool()", <br/>,
            "string()", <br/>]
          } /><br/>
          &emsp; &emsp; - input and output <br/>
          &emsp; &emsp; &emsp; &emsp; - output <br/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; - displays the provided content in the console<br/> <br/>
          <Code text={"show()"}/> <br/>
          &emsp; &emsp; &emsp; &emsp; - input <br/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; - gets from the console the typed text, showing the provided prompt before it <br/> <br/>
          <Code text={"get()"}/> <br/>
          &emsp; &emsp; - type function <br/>
          &emsp; &emsp; &emsp; &emsp; - one-parameter function which returns the type of the provided variable, or value <br/> <br/>
          <Code text={"type()"} /> <br/>
          &emsp; &emsp; - size function<br/>
          &emsp; &emsp; &emsp; &emsp; - one-parameter function which returns the size of the provided variable or value <br/>
          &emsp; &emsp; &emsp; &emsp; - can be used only with lists, strings, binary numbers <br/><br/>
          <Code text={"size()"} /> <br/>
          &emsp; &emsp; - fragment <br/>
          &emsp; &emsp; &emsp; &emsp; - three-parameter function which returns a fragment of the provided list, string or binary number <br/>
          &emsp; &emsp; &emsp; &emsp; - you need to provide also the starting and ending index <br/><br/>
          <Code text={"fragment()"} /> <br/>
          &emsp; &emsp; - split <br/>
          &emsp; &emsp; &emsp; &emsp; - there are two versions of the same function: one for strings and one for binary numbers <br/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; - split takes a string and a target character, based on which the string will be splitted and returned as a list of strings <br/> <br/>
          <Code text={"split()"}/><br/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; - binSplit only takes a binary number as parameter, and returns a list of zeros and ones in integer form<br/> <br/>
          <Code text={"binSplit()"}/><br/>
          &emsp; &emsp; - join <br/>
          &emsp; &emsp; &emsp; &emsp; - also this function has two forms, both take a list as a parameter <br/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; - the standard function can take a list containing any type of value, and a separator for the join process <br/> <br/>
          <Code text={"join()"}/> <br/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; - the binary version takes lists containing only integers (0 or 1), binary numbers or booleans <br/> <br/>
          <Code text={"binJoin()"}/> <br/>
          &emsp; &emsp; - fragment <br/>
          &emsp; &emsp; &emsp; &emsp; - returns a fragment of the given value <br/>
          &emsp; &emsp; &emsp; &emsp; - gets three parameters: the value (or variable), the starting index and the ending index <br/>
          &emsp; &emsp; &emsp; &emsp; - only works with lists, strings and binary numbers <br/> <br/>
          <Code text={"fragmment()"}/> <br/>
          &emsp; &emsp; - find <br/>
          &emsp; &emsp; &emsp; &emsp; - returns the index of the gin element in the given data structure <br/>
          &emsp; &emsp; &emsp; &emsp; - if the requeste element is not found, returns -1 <br/>
        </p>

        <p>
          Importation
        </p>
        <p style={styles.description}>
          File importation in Skarlett involves two ways: <br/>
          &emsp; &emsp; - importation of default modules <br/>
          &emsp; &emsp; - importation of user defined modules or files <br/> <br/>
          In the first case, importation does not require the file extension at the end of the file name you want to import <br/><br/>
          <Code text={"import binLogic"}/><br/>

          In the second case, you are required to add the extension at the end of the file name and provide full path, to tell the interpreter where to get the file <br/><br/>
          <Code text={"import '/home/username/skarlettFiles/myModule.skt'"}/><br/>
        </p>
        <p>
          Skarlett code example
        </p>
        <div style={styles.codeMain}>
          <p style={styles.codeText}>
            <strong>
            import bitLogic <br/><br/>

            #
            Write a function to convert a number in binary, <br/>
            then check if the result is correct bit by bit, <br/>
            using the bitXnor function from "bitLogic" module <br/>
            # <br/><br/>

            fnc numberToBits(number) {"{"} <br/>
              &emsp;&emsp;convertedNumber = bx0 <br/>
              &emsp;&emsp;numberCopy = number<br/>
              &emsp;&emsp;bitIndex = 0<br/><br/>
              &emsp;&emsp;while numberCopy != 0 {"{"} <br/>
              &emsp;&emsp;&emsp;&emsp;bit = numberCopy % 2 <br/>
              &emsp;&emsp;&emsp;&emsp;convertedNumber += bit*(2**bitIndex) <br/>
              &emsp;&emsp;&emsp;&emsp;numberCopy //= 2 <br/>
              &emsp;&emsp;&emsp;&emsp;i += 1 <br/>
              &emsp;&emsp;{"}"} <br/><br/>
              &emsp;&emsp;return convertedNumber <br/>
              {"}"} <br/><br/>

            testNumber = 15 <br/> <br/>

            castedNumber = bin(testNumber) <br/>
            show(castedNumber) <br/> <br/>

            functionTest = numberToBits(testNumber) <br/>
            show(functionTest) <br/> <br/>

            correctnessCheck = bitXnor(castedNumber, functionTest) <br/>
            correct = true <br/> <br/>

            i = 0 <br/>
            while i {"<"} size(correctnessCheck) {"{"} <br/>
              &emsp;&emsp;{"if"} correctnessCheck[i] != 1 {"{"} <br/>
              &emsp;&emsp;&emsp;&emsp; correct = false <br/>
              &emsp; &emsp; {"}"} <br/>
            {"}"} <br/><br/>

            show('Bit by bit analysis shows that the correctness is: ' + correct)<br/>
            </strong>

          </p>
        </div>
      </div>
    </div>
  )
}

function Downloads() {

  function Downloads() {
    const style = {
      style : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        color: '#14FFEC',
        fontSize : '40px'
      },
      btn : {
        backgroundColor : '#383B4B',
        color : '#14FFEC',
        borderColor : '#14FFEC',
        borderRadius : '20px',
        fontSize : '40px',
        padding : '10px',
        margin : '5px',
        borderWidth : '5px'
      }

    }
    /*<a href={null} style={style.btn}><button style={style.btn}>Linux amd64</button></a>*/
    return(
      <div style={style.style}>
        <a href={linuxAarch64TarGz} style={style.btn}><button style={style.btn}>Linux arm64 / aarch64</button></a>

        <a href={linux86_64} style={style.btn}><button style={style.btn}>Linux x86_64</button></a>

        <a href={linuxi386TarGz} style={style.btn}><button style={style.btn}>Linux i386 / i686</button></a>

        <a style={style.btn} href={macOsZip}><button style={style.btn}>Mac 64 bit <br/> Intel Universal</button></a>

        <a href={windowsWizard} style={style.btn}><button style={style.btn}>Windows 64 bit</button></a>
      </div>
    )
  }

  const styles = {
    main : {
      display: 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf : 'center',
      width: '80%'
    },
    logos : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-evenly',
      alignSelf : 'center',
      alignItems : 'center',
      marginBottom : '70px'
    },
    logo : {
      width  : '35%',
      height : '35%'
    },
    buttons : {
      display: 'flex',
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf : 'center'
    },
    title : {
      fontSize : "50px",
      color : '#14FFEC'
    }
  }

  return (
    <div style={styles.main}>
      <p style={styles.title}>
        Download links:
      </p>
      <div style={styles.buttons}>
        <Downloads/>
      </div>
      <p style={styles.title}>
        An installation guide is provided in each package,<br/> just follow the few steps and you'll be ready to go
      </p>
    </div>
  )
}

function BugReport() {
  const style = {
    main : {
      color : '#FFF',
      width: '80%',
      alignSelf : 'center',
      fontSize : '40px'
    },

  }

  return (
    <div style={style.main}>
      <p>
        As you could imagine, I removed every little bug I found during the test phase, but there could be something I missed out. <br/>
        If you encounter an unknown error (that you can't figure out reading the documentation), or a bug, please report is as soon as possible. <br/>
        I will fix every bug, and release a new update. <br/> <br/>
        <div className={"reportABugCode"}>
          <Code text={["How to report a bug:", <br/>, "send an email to systemcpy@gmail.com containing: ", <br/>, "- your source code", <br/>, "- the platform on which you are coding", <br/>, "- eventual packages", <br/>, '- the version of Skarlett which you are using']}/>
        </div>
        <br/>
        Thank you for your help!
      </p>
    </div>
  )
}

const mainStyle = {
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'center',
  width : '100%'
}

function App() {
  const [show, setShow] = useState(<HomePage/>)

  function mkHome() {
    setShow(<HomePage/>)
  }

  function mkDocs() {
    setShow(<Documentation/>)
  }

  function mkDownloads() {
    setShow(<Downloads/>)
  }

  function mkBugReport() {
    setShow(<BugReport/>)
  }

  function NavBar(){

    return (
      <div className={"navBarMain"}>
        <a onClick={mkHome} href={'#'} className={"link"} >Home</a>
        <a onClick={mkDocs} href={'#'} className={"link"} id={"docs"}>Docs</a>
        <a onClick={mkDownloads} href={'#'} className={"link"}>Downloads</a>
        <a onClick={mkBugReport} href={'#'} className={"link"} id={"reportABug"}>Report a bug</a>
      </div>
    )
  }

  return (
    <div className="App" style={mainStyle}>
      <NavBar/>
      {
        show
      }
    </div>
  );
}

export default App;