import React from 'react';
import styled from 'styled-components';

const StyledTextComponent = styled.div`
	background-color: peachpuff;
	width: 40%;
	margin: 0 auto;
	padding: 15px 25px;
`

export const TextComponent = () => {
	return(
		<StyledTextComponent>
			<p>Omae wa mou shindeiru. Anime convention hontou nihongo, Sailor Moon onigiri onii-chan, dame ORA ORA ORA ne weeaboo Fullmetal Alchemist isekai kami-sama shonen onigiri. Waifu Dragon Ball Z kami-sama katakana ORA ORA ORA isekai kimono moe; desu kareshi meganekko, yandere JoJo's Bizarre Adventure kohai shonen. Aishiteru seiyuu senpai notice me yokatta zettai Boku no Hero Academia JoJo's Bizarre Adventure doujinshi weeaboo Death Note sou desu ne harem Bleach bakemono kohai. AMV taiyaki kanashii; josei Fullmetal Alchemist takoyaki anime convention otaku otaku sushi hiragana yokatta Demon Slayer bakemono otaku. Bishoujo itadakimasu pocky Inuyasha OVA chotto Studio Ghibli doujinshi WRYYY anime doki doki Attack on Titan kuudere otouto AMV.</p>
		</StyledTextComponent>
	);
}