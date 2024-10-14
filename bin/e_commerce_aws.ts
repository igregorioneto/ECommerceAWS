#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ECommerceAwsStack } from '../lib/e_commerce_aws-stack';
import { ProductsAppStack } from '../lib/productsApp-stack';
import { environment } from '../env/environment';
import { ECommerceApiStack } from '../lib/ecommerceApi-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: environment.account,
  region: environment.region
}

const tags = {
  cost: environment.cost,
  team: environment.team
}

const productsAppStack = new ProductsAppStack(app, "ProductsApp", {
  tags: tags,
  env: env
})

const eCommerceApiStack = new ECommerceApiStack(app, "EcommerceApi", {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  productsAdminHandler: productsAppStack.productsAdminHandler,
  tags: tags,
  env: env,
})
eCommerceApiStack.addDependency(productsAppStack)