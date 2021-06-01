import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
	Container,
	Header,
	CarImages,
	Content,
	Details,
	Description,
	Brand,
	Name,
	Rent,
	Period,
	Price,
	About,
	Accessories,
	Footer
	} from './styles';

export function CarDatails(){

	return (
		<Container>
			<Header>
				<BackButton onPress={() => {}} />
			</Header>
			<CarImages>
				<ImageSlider
					imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
					/>
			</CarImages>
			<Content>
				<Details>
					<Description>
						<Brand>Lamborghini</Brand>
						<Name>Huracan</Name>
					</Description>
					<Rent>
						<Period>Ao Dia</Period>
						<Price>R$ 580</Price>
					</Rent>
				</Details>
				<Accessories>
					<Accessory name="380Km/h" icon ={speedSvg}/>
					<Accessory name="3.2s" icon ={accelerationSvg}/>
					<Accessory name="800 HP" icon ={forceSvg}/>
					<Accessory name="Gaoslina" icon ={gasolineSvg}/>
					<Accessory name="Auto" icon ={exchangeSvg}/>
					<Accessory name="2 pessoas" icon ={peopleSvg}/>
				</Accessories>
				<About>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Possimus molestiae, numquam tempora nihil corrupti
					consequatur? Incidunt repellat adipisci doloremque amet
					illum nisi.
				</About>
			</Content>
			<Footer>
				<Button title="Confirmar"/>
			</Footer>
		</Container>

	)

}