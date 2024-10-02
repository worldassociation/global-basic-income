# Global Basic Income App

The _Global Basic Income_ app is an open source platform designed to manage a continuous universal basic income (UBI) through cutting-edge, decentralized, and transparent mechanisms. By harnessing the power of blockchain and real-time payment technologies, we aim to provide a sustainable income stream for everyone, helping to foster financial security on a global scale.

## How it Works:

1. **Proof of Personhood:** To join the program, people must complete a secure identity verification using [zkMe](https://zk.me/)’s facial scanning technology, ensuring that each recipient is a real and unique individual. This step maintains the integrity of the system, preventing fraud and duplication.

2. **Digital Currency Distribution:** Once verified, users begin receiving their share of the [World Association](https://worldassociation.org/)'s official digital currency, the world drachma. Powered by [Superfluid](https://superfluid.finance/), the app sets up continuous "money streams" to participants, distributing income every second in real-time.

By integrating individuals into a decentralized global economy, the _Global Basic Income_ app represents a step toward financial equality, empowering people to gain direct access to a continuous income stream. Join us in building a future where basic income is a human right, accessible to all through cutting-edge digital technologies.

## Philosophy

World Association applications are built on the principles of openness, individual freedom, and the right to fork. All core software and tools needed to run these applications are freely available and easy to use. This ensures that if the World Association or any of its platforms is ever compromised, the community can fork the system and create a new version that better serves the collective interests of humanity.

## Technology Stack

- Framework: [Next.js (App Router)](https://nextjs.org)
- Language: [TypeScript](https://typescriptlang.org)
- Styling: [Tailwind CSS](https://tailwindcss.com)
- Components: [Shadcn UI](https://ui.shadcn.com)
- Onchain components: [OnchainKit](https://onchainkit.xyz/)
- Backend: [Base](https://base.org) and [thirdweb Engine](https://thirdweb.com/engine)
- Auth: [zkMe](https://zk.me)
- Money streaming: [Superfluid](https://superfluid.finance)
- Deployment: [Vercel](https://vercel.com)

## Getting Started

### Environment Setup

1. Copy the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file and replace the placeholder values with your actual API keys and configurations:
   - Coinbase Developer Platform: Get this from https://portal.cdp.coinbase.com/products/onchainkit
   - WalletConnect: Get this from https://www.walletconnect.com/
   - zKMe: Obtain from https://dashboard.zk.me/
   - thirdweb: Set up at https://thirdweb.com/dashboard/engine or deploy your own following [this guide](https://support.thirdweb.com/engine/eRgkLPBdL1WJJLzAbuWrPZ/how-to-deploy-your-self-hosted-thirdweb-engine-on-the-railway/d97FnFt8e926FqniTaYxfD)
3. Make sure not to commit your actual `.env` file to version control.

### Running the Development Server

To run the development server:

```bash
pnpm install
pnpm dev
```

The application will be available at http://localhost:3000.

## Contributing

We welcome contributions from the community. Please read our [Contributing Guidelines](CONTRIBUTING.md) for more information on how to get involved.

## License

This project is open-source and available under the [MIT License](LICENSE).
