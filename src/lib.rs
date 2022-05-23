extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

mod sha256_str;

#[wasm_bindgen]
pub fn sha256_hasher(data: &str) -> String {
    sha256_str::sha256_hasher(data)
}