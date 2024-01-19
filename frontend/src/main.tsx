import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import App from "./App";

const theme = createTheme({
	
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider
			theme={theme}
			defaultColorScheme="dark"
		>
			<Notifications />
			<ModalsProvider>
				<App />
			</ModalsProvider>
		</MantineProvider>
	</React.StrictMode>,
);

