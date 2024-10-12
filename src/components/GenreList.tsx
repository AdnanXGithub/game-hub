import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";


interface Props {
  onSelectGenre : (genre : Genre) => void;
  selectedGenre : Genre | null
}


const GenreList = ({selectedGenre,onSelectGenre} : Props) => {
  const { data ,isLoading,error } = useGenre();

  if(error) return null;
  if (isLoading) return <Spinner/>
  return (
    <>
    <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>

    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' objectFit='cover' borderRadius={8} src={genre.image_background}/>
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>

          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
