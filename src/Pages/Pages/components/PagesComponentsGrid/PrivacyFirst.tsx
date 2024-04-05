import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from './PrivacyFirst.module.css'
import icon from '/icons/raiz.svg'
const PrivacyFirst: React.FC = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Privacy-first writing'
				desc='Enjoy the freedom of complete privacy. A workspace with end-to-end encryption and decentralized notes, wikis, and pages.'
			/>
			<EllipticCurveCrypto />
		</div>
	)
}

export default PrivacyFirst

const EllipticCurveCrypto = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={icon} alt='' />
			</div>
			<p className={styles.title}>Elliptic Curve Crypto</p>
			<div className={styles.descContainer}>
				<p className={styles.desc}>
					Elliptic Curve Cryptography (ECC) is one of the most powerful but
					least understood types of cryptography in wide use today. At
					CloudFlare, we make extensive use of ECC to secure everything from our
					customers HTTPS connections to how we pass data between our data
					centers.Fundamentally, we believe its important to be able to
					understand the technology behind any security system in order to trust
					it. To that end, we looked around to find a good, relatively
					easy-to-understand primer on ECC in order to share with our users.
					Finding none, we decided to write one ourselves. That is what follows.
					Be warned, this is a complicated subject and its not possible to boil
					down to a pithy blog post. In other words, settle in for a bit of an
					epic because theres a lot to cover. If you just want the gist, the
					TL;DR is: ECC is the next generation of public key cryptography and,
					based on currently understood mathematics, provides a significantly
					more secure foundation than first generation public key cryptography
					systems like RSA. If youre worried about ensuring the highest level of
					security while maintaining performance, ECC makes sense to adopt. If
					youre interested in the details, read on.
				</p>
				<div className={styles.encripted}>
					<p className={styles.encriptedDesc}>
						RWxsaXB0aWMgQ3VydmUgQ3J5cHRv Z3JhcGh5IChFQ0MpIGlzIG9uZSBv
						ZiB0aGUgbW9zdCBwb3dlcmZ1bCBi dXQgbGVhc3QgdW5kZXJzdG9vZCB0
						eXBlcyBvZiBjcnlwdG9ncmFwaHkg aW4gd2lkZSB1c2UgdG9kYXkuIEF0
						IENsb3VkRmxhcmUsIHdlIG1ha2Ug ZXh0ZW5zaXZlIHVzZSBvZiBFQ0Mg
						dG8gc2VjdXJlIGV2ZXJ5dGhpbmcg ZnJvbSBvdXIgY3VzdG9tZXJzIEhU
						VFBTIGNvbm5lY3Rpb25zIHRvIGhv dyB3ZSBwYXNzIGRhdGEgYmV0d2Vl
						biBvdXIgZGF0YSBjZW50ZXJzLkZ1 bmRhbWVudGFsbHksIHdlIGJlbGll
						dmUgaXRzIGltcG9ydGFudCB0byBi ZSBhYmxlIHRvIHVuZGVyc3RhbmQg
						dGhlIHRlY2hub2xvZ3kgYmVoaW5k IGFueSBzZWN1cml0eSBzeXN0ZW0g
						aW4gb3JkZXIgdG8gdHJ1c3QgaXQu IFRvIHRoYXQgZW5kLCB3ZSBsb29r
						ZWQgYXJvdW5kIHRvIGZpbmQgYSBn b29kLCByZWxhdGl2ZWx5IGVhc3kt
						dG8tdW5kZXJzdGFuZCBwcmltZXIg b24gRUNDIGluIG9yZGVyIHRvIHNo
						YXJlIHdpdGggb3VyIHVzZXJzLiBG aW5kaW5nIG5vbmUsIHdlIGRlY2lk
						ZWQgdG8gd3JpdGUgb25lIG91cnNl bHZlcy4gVGhhdCBpcyB3aGF0IGZv
						bGxvd3MuIEJlIHdhcm5lZCwgdGhp cyBpcyBhIGNvbXBsaWNhdGVkIHN1
						YmplY3QgYW5kIGl0cyBub3QgcG9z c2libGUgdG8gYm9pbCBkb3duIHRv
						IGEgcGl0aHkgYmxvZyBwb3N0LiBJ biBvdGhlciB3b3Jkcywgc2V0dGxl
						IGluIGZvciBhIGJpdCBvZiBhbiBl cGljIGJlY2F1c2UgdGhlcmVzIGEg
						bG90IHRvIGNvdmVyLiBJZiB5b3Ug anVzdCB3YW50IHRoZSBnaXN0LCB0
						aGUgVEw7RFIgaXM6IEVDQyBpcyB0 aGUgbmV4dCBnZW5lcmF0aW9uIG9m
						IHB1YmxpYyBrZXkgY3J5cHRvZ3Jh cGh5IGFuZCwgYmFzZWQgb24gY3Vy
						cmVudGx5IHVuZGVyc3Rvb2QgbWF0 aGVtYXRpY3MsIHByb3ZpZGVzIGEg
						c2lnbmlmaWNhbnRseSBtb3JlIHNl Y3VyZSBmb3VuZGF0aW9uIHRoYW4g
						Zmlyc3QgZ2VuZXJhdGlvbiBwdWJs aWMga2V5IGNyeXB0b2dyYXBoeSBz
						eXN0ZW1zIGxpa2UgUlNBLiBJZiB5 b3VyZSB3b3JyaWVkIGFib3V0IGVu
						c3VyaW5nIHRoZSBoaWdoZXN0IGxl dmVsIG9mIHNlY3VyaXR5IHdoaWxl
						IG1haW50YWluaW5nIHBlcmZvcm1h bmNlLCBFQ0MgbWFrZXMgc2Vuc2Ug
						dG8gYWRvcHQuIElmIHlvdXJlIGlu dGVyZXN0ZWQgaW4gdGhlIGRldGFp
						bHMsIHJlYWQgb24u
					</p>
				</div>
				<div className={styles.color}></div>
			</div>
		</div>
	)
}
