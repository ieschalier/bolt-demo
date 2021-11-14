# bolt-demo

This is a personal project to test [bolt](https://github.com/boltpkg/bolt)

## commands

You can use bolt to run command on root for one or many apps / components.

Some quick recipes :

### build all components

> Components need to be build, you can build all components with following command.

```bash
bolt ws --only-fs="components/*" run build
```

### run on one application

```bash
bolt w market-workspace-apps run start
```

## Applications

- https://bolt-demo-market.vercel.app/
- https://bolt-demo-bo.vercel.app/

## TODO

- [ ] Dev environment for components
