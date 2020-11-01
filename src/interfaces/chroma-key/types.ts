export type ChromaColor = {
	r: number;
	g: number;
	b: number;
	a: number;
};

export type IHandleConfigs = {
	handleBackgroundColor: (color: any) => void;
	handleBackgroundImage: (image: any) => void;
};

export type IChromaConfigs = {
	backgroundImage: any;
	chromaColor: ChromaColor;
};
