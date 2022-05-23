use sha2::{Sha256, Digest};

pub fn sha256_hasher(data: &str) -> String {
    let mut h = Sha256::new();
    h.update(data.as_bytes());
    let result = h.finalize();
    base64::encode(result)
}

#[cfg(test)]
mod cipher_tests {
    use super::*;
    #[test]
    fn hasher_check(){
        let data = "hello world";
        let h = sha256_hasher(data);
        assert_eq!(h,"b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");
    }
}