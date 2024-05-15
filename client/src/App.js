import React, { useState } from 'react';
import { AppBar, Box, Card, CardMedia, Container } from '@mui/material'
import useStyles from './styles'
import { createImage, process } from './actions';

function App() {
  const [data, setData] = useState()
  const [base64_result, setBase64_result] = useState('')
  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit.');
    createImage(base64_result).then(
      (img_name) => {
        console.log(img_name);
        process(img_name)
      }
    )
  }

  const encodeImageFileAsURL = (e) => {
    let base64String = "";

    setData(URL.createObjectURL(e.target.files[0]))

    var file = e.target.files[0];

    var reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "")
        .replace(/^.+,/, "");
      setBase64_result(base64String)
    }
    reader.readAsDataURL(file);
  }


  // useEffect(() => {
  //   if (data.length < 1) return
  //   var newImageURL = ''
  //   data.forEach(image => newImageURL = URL.createObjectURL(image))
  //   setImageURL(newImageURL)
  // }, [data])

  return (
    <div className="App">
      <Container>
        <AppBar className={classes.appBar} position="static" >
          <form onSubmit={handleSubmit} method="POST">
            <Box textAlign='center'>
              <input type="file" label="image" multiple accept="image/*" name="image" onChange={encodeImageFileAsURL} />
              <input type="submit" value={"send form"} />
            </Box>
          </form>
        </AppBar>
        <Card className={classes.card}>
          <CardMedia className={classes.media} component="div" image={data} name="image" title="image" />
        </Card>
      </Container>
    </div>
  );
}

export default App;
