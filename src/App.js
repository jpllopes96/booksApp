import React, {useState, useEffect} from 'react';
import { Keyboard } from 'react-native';
import { Container, Logo, Title, Input, CenterView, Btn, BtnText, List } from './styles';
import Books from './components/Books';
import getRealm from './services/realm'

export default function App(){
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [books, setBooks] = useState([]);
  const [idEdit, setIdEdit] = useState(null)
  const [disabledBtn, setDisabledBtn] = useState(false)

  useEffect(()=>{
    loadBooks = async () =>{
      const realm = await getRealm();
      const data = realm.objects('Book');
      setBooks(data)
    }

    loadBooks()

  }, [])

  saveBook = async (data) =>{
    const realm = await getRealm();

    const id = realm.objects('Book').sorted('id', true).length > 0 
    ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

    const dataBook ={
      id: id,
      name: data.name,
      price: data.price
    }

      realm.write(()=>{
      realm.create('Book', dataBook)
    })
  }

  addBook = async () =>{
    if(name === '' || price === ''){
      alert("Preencha todos os campos")
      return;
    }
    try{
      const data = { name: name, price: price }
      await saveBook(data);

      setName('');
      setPrice('')
      Keyboard.dismiss();
    }catch(err){
      alert(err)
    }
    
  }


  editBook = (data) =>{
    setName(data.name)
    setPrice(data.price)
    setIdEdit(data.id)
    setDisabledBtn(true)
  }

  updateBook = async () =>{
    if(idEdit === null) {
      alert("You must select a book")
      return;
    }

    const realm = await getRealm();
    const response = {
      id: idEdit,
      name: name,
      price: price
    }

    await realm.write(()=>{
      realm.create('Book', response, 'modified')
    });

    const newData = await realm.objects('Book').sorted('id', false);

    setBooks(newData);
    setName('');
    setPrice('');
    setIdEdit(null);
    setDisabledBtn(false)
    Keyboard.dismiss();

  }

  deleteBook = async (data) =>{
    const realm = await getRealm();
    const ID = data.id;

    realm.write(()=>{
      if(realm.objects('Book').filtered('id ='+ ID ).length > 0){
        realm.delete(
          realm.objects('Book').filtered('id =' + ID)
        )
      }
    })

    const currentBooks = await realm.objects('Book').sorted('id', false);
    setBooks(currentBooks)
  }

  return(
    <Container>
      <Logo>Books Wishlist</Logo>

      <Title>Name</Title>
      <Input autoCapitalize="none" autoCorrect={false} 
        value={name}
        onChangeText={ (text) => setName(text)}
      />

      <Title>Price</Title>
      <Input autoCapitalize="none" autoCorrect={false} 
        value={price}
        onChangeText={ (text) => setPrice(text)}
      />

      <CenterView>
        <Btn onPress={ addBook} disabled={disabledBtn}
          style={{ opacity: disabledBtn ? 0.1 : 1 }}
        >
            <BtnText>Add</BtnText>
        </Btn>

        <Btn onPress={updateBook} disabled={!disabledBtn}
          style={{ opacity: !disabledBtn ? 0.1 : 1 }}
        >
            <BtnText>Update</BtnText>
        </Btn>
      </CenterView>
      <List 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={books}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (<Books data={item} edit={editBook} del={deleteBook}/>)}
      />
    </Container>
  )
}